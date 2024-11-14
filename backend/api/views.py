from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .serializers import UserSerializer, NoteSerializer, PostSerializer
from .models import Note, Post


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


# This is only for the Tutorial - need to remove
class NoteCreateView(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


# This is only for the Tutorial - need to remove
class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)


class PostCreateView(generics.ListCreateAPIView):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated] # Might need add in if user.is_staff == True somewhere in here or in the api.serializer.UserSerializer class for this to work

    # Might need to add in search for categories as well
    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


# Fix below - Will need to split this up for later
# Basic view for posts
class AllPostsView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]


# class AllPublishedPostsView(AllPostsView):
#     queryset = Post.objects.filter(published=True)
#     permission_classes = [AllowAny]


# class AllDraftPostsView(AllPostsView):
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         user = self.request.user
#         return Post.objects.filter(author=user, published=False)


# Fix below - Will need to split this up for later
# Basic view for a single post
class SinglePostView(generics.ListAPIView):
    serializer_class = PostSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        slug = self.kwargs.get('slug')
        # print(f'Slug = {slug}')
        return Post.objects.filter(slug=slug)


# class SingleDraftPostView(generics.ListAPIView):
#     serializer_class = PostSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self, slug):
#         user = self.request.user
#         return Post.objects.filter(author=user, slug=slug, published=False)


# class SinglePublishedPostView(generics.ListAPIView):
#     serializer_class = PostSerializer
#     permission_classes = [AllowAny]

#     def get_queryset(self, slug):
#         return Post.objects.filter(slug=slug, published=True)


class PostUpdateView(generics.UpdateAPIView):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated] # Might need add in if user.is_staff == True somewhere in here or in the api.serializer.UserSerializer class for this to work

    def get_queryset(self):
        # print('Getting queryset in Django')
        user = self.request.user
        # print(user.username)
        slug = self.kwargs.get('slug')
        # print(slug)
        return Post.objects.get(author=user, slug=slug)
        # post = Post.objects.get(author=user, slug=slug)
        # print(f'ID of post = {post.id}')
        # return post

    # Need to fix something in here to properly update certain fields
    # * slug
    # * published and publish_date
    def update(self, request, *args, **kwargs):
        post = self.get_queryset()
        # print(request.data)
        serializer = self.get_serializer(instance=post, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class PostDelete(generics.DestroyAPIView):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated] # Might need add in if user.is_staff == True somewhere in here or in the api.serializer.UserSerializer class for this to work

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)


# Add in full CRUD functions for Categories here
# Add in full CRUD functions for Comments here
