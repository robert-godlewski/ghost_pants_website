from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify


# This is from the tutorial - will remove
class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self) -> str:
        return self.title


# Used to group blogs together
class Category(models.Model):
    title = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(null=False, unique=True)

    class Meta:
        ordering = ['title']
        verbose_name_plural = 'Categories'

    def __str__(self) -> str:
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)


# Actual blog post
class Post(models.Model):
    title = models.CharField(max_length=255, unique=True)
    subtitle = models.CharField(max_length=255, blank=True)
    slug = models.SlugField(null=False)
    content = models.TextField() # Might need to add in something here to make more of a word ducument like setting available
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    publish_date = models.DateTimeField(blank=True, null=True)
    published = models.BooleanField(default=False)

    author = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, blank=True) # Might need to fix this field later
    # Need a many to many field for tags here - refer to this for details https://docs.djangoproject.com/en/5.1/topics/db/models/#many-to-many-relationships

    class Meta:
        ordering = ["-publish_date"]

    def __str__(self) -> str:
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            if self.subtitle:
                self.slug = slugify(self.title+'-'+self.subtitle)
            else:
                self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class Comment(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    author = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    class Meta:
        ordering = ["-created_at"]
