from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Category, Post, Comment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id", 
            "username", 
            "password",
            # Will need to do some authentification stuff here instead of keeping this
            "is_staff"
        ]
        extra_kwargs = {"password": {"write_only": True}}

    # Might need another function to update user.is_staff from False to True with django.emails and django-oauth with the main email.
    def create(self, validated_data):
        # Might need to add in the default that user.is_staff = False
        user = User.objects.create_user(**validated_data)
        return user


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "title", "slug"]

    # Categories have full CRUD only with admin users and Read by everyone


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [
            "id", 
            "title", 
            "subtitle", 
            "slug", 
            "content", 
            "created_at", 
            "updated_at",
            "publish_date",
            "published",
            "author",
            # "category"
        ]
        extra_kwargs = {
            "author": {"read_only": True}, 
            # "category": {"read_only": True},
            "slug": {"read_only": True},
            "created_at": {"read_only": True},
            "updated_at": {"read_only": True},
        }

    # Posts have full CRUD only with admin users and Read by everyone
    # def create(self, validated_data): return super().create(validated_data)


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ["id", "content", "created_at", "updated_at", "author", "post"]
        extra_kwargs = {"author": {"read_only": True}, "post": {"read_only": True}}

    # Comments have full CRUD only with users and Read by everyone
