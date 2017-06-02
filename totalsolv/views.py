# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.http import HttpResponseRedirect, HttpResponse

from django.conf import settings
from django.shortcuts import redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from .models import Complaint


def intro(request) :
    if not request.user.is_authenticated:
        return HttpResponseRedirect('%s?next=%s' % (settings.LOGIN_URL, request.path))
    else:
        All=Complaint.objects.all
        context = {
            'All':All,
        }
        return render(request, 'totalsolv/main.html',context) #userid is not being sent
