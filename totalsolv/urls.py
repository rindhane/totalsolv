from django.conf.urls import url

from .import views

app_name =  'totalsolv'
urlpatterns = [

url(r'^$', views.intro,name='intro'),


]
