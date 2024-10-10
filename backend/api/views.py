from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
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


class AllPostsView(generics.ListAPIView):
    # queryset = Post.objects.all()
    # Might also need a method to update if any draft post gets published or not
    queryset = Post.objects.filter(published='True')
    serializer_class = PostSerializer
    permission_classes = [AllowAny]


class AddDraftPostsView(generics.ListAPIView):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(author=user, published=False)


class SinglePostView(generics.ListAPIView):
    serializer_class = PostSerializer
    permission_classes = [AllowAny]

    def get_queryset(self, slug):
        return Post.objects.filter(slug=slug)


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


class PostUpdateView(generics.UpdateAPIView):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated] # Might need add in if user.is_staff == True somewhere in here or in the api.serializer.UserSerializer class for this to work

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(author=user)

    def perform_update(self, serializer): # Probably need to fix this
        if serializer.is_valid():
            serializer.update(author=self.request.user)
        else:
            print(serializer.errors)



class PostDelete(generics.DestroyAPIView):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated] # Might need add in if user.is_staff == True somewhere in here or in the api.serializer.UserSerializer class for this to work

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)


# Add in full CRUD functions for Categories here
# Add in full CRUD functions for Comments here
