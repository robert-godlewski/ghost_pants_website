from django.urls import path
from . import views

urlpatterns = [
    # Split this into 2 with drafts and published
    path('post/', views.AllPostsView.as_view(), name='all-posts'),
    path('post/create/', views.PostCreateView.as_view(), name='create-post'),
    # path('post/', views.AllPublishedPostsView.as_view(), name='all-posts'),
    # path('post/drafts/', views.AllDraftPostsView.as_view(), name='all-draft-posts'),
    # Split this into 2 with drafts and published
    path('post/read/<str:slug>/', views.SinglePostView.as_view(), name='single-post'),
    # path('post/read/draft/<str:slug>/', views.SingleDraftPostView.as_view(), name='draft-post'),
    # path('post/read/<str:slug>/', views.SinglePublishedPostView.as_view(), name='read-post'),
    # For updating slugs we might need to id of the post not the slug
    path('post/update/<str:slug>/', views.PostUpdateView.as_view(), name='update-post'),
    # path('post/update/<int:pk>/', views.PostUpdateView.as_view(), name='update-post'),
    path('post/delete/<str:slug>/', views.PostDeleteView.as_view(), name='delete-post')
]