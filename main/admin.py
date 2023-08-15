from django.contrib import admin
from .models import *


@admin.register(ProfileModel)
class ProfileModelAdmin(admin.ModelAdmin):
    list_display = ['user', 'id_user']
    search_fields = ['user', 'id_user']