from django.urls import path
from . import views

urlpatterns = [
    # Going to remove the notes later on
    path('notes/', views.NoteCreateView.as_view(), name='create-note'),
    path('notes/delete/<int:pk>/', views.NoteDelete.as_view(), name='delete-note'),
    path('post/', views.AllPostsView.as_view(), name='all-posts'),
    path('post/read/<int:pk>/', views.SinglePostView.as_view(), name='read-post'),
    path('post/create', views.PostCreateView.as_view(), name='create-post'),
    path('post/update/<int:pk>/', views.PostUpdateView.as_view(), name='update-post'),
    path('post/delete/<int:pk>/', views.PostDelete.as_view(), name='delete-post')
]