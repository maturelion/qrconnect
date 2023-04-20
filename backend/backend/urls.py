from django.contrib import admin
from django.urls import path, include

urlpatterns = [
  path("only-eye-can-see/", admin.site.urls), path("", include("api.urls"))
]
