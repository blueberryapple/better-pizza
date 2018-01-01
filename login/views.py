from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required


# Create your views here.
def logout(request):
    return logout_then_login(request, login_url='login')
