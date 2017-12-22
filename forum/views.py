from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import logout_then_login

# Create your views here.
@login_required
def forum(request):
    return render(request, 'forum/forum.html')

def logout(request):
    return logout_then_login(request, login_url='/login')
