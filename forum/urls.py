from django.urls import re_path
from . import views

app_name = 'forum'
urlpatterns = [\
    re_path(r'^$', views.forum, name='index'),
    re_path(r'^logout', views.logout, name='logout'),
    re_path(r'^', views.forum, name='all-else'), # catches all other queries and sends it to the forum view
]
