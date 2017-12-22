from django.urls import re_path, reverse
from django.contrib.auth.views import LoginView
from . import views

urlpatterns = [
    re_path(r'^$', LoginView.as_view(
        template_name='login/index.html'
    ), name='login'),
    re_path(r'^landing', views.landing, name='land'),
    re_path(r'^logout', views.logout, name='logout'),
]
