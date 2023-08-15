from django.shortcuts import render
from .models import *
from django.http import HttpResponse


def HomeView(request):
    return render(request, 'index.html', context={
    })


def SignUpView(request):
    return render(request, 'signup.html', context={})
