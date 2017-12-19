from django.conf.urls import url
from django.contrib.auth.views import LoginView
from . import views

urlpatterns = [
    url(r'^$', LoginView.as_view(
        template_name='login/index.html',
        extra_context={'next': 'landing'}
    ), name='login'),
    url(r'^landing', views.landing, name='land'),
    url(r'^logout', views.logout, name='logout'),
]
