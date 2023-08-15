from django.urls import path
from .views import *

urlpatterns = [
    path('', HomeView, name='home'),
    path('signup', SignUpView, name='signup')
]
