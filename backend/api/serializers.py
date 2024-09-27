from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note, Category, Post, Comment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


# This is from the tutorial - will remove
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}


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
            "category"
        ]
        extra_kwargs = {"author": {"read_only": True}}

    # Posts have full CRUD only with admin users and Read by everyone


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ["id", "content", "created_at", "updated_at", "author", "post"]
        extra_kwargs = {"author": {"read_only": True}, "post": {"read_only": True}}

    # Comments have full CRUD only with users and Read by everyone
