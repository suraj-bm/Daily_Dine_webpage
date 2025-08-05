from django.urls import path
from . import views

app_name = 'hotels'

urlpatterns = [
    path('', views.hotels_register, name='hotel_registration'),
    path('register/', views.hotels_register, name='hotel_register'),
    path('success/', views.hotels_register_success, name='success'),
    path('submitted/', views.hotels_register_submitted, name='hotel_submitted'),
]                   