from rest_framework import viewsets
from .serializers import MeetupSerializer
from .models import Meetup

from django.shortcuts import render

# Create your views here.
'''
class TodoView(viewsets.ModelViewSet):
	#The viewsets base class provides the implementations for CRUD operations by default
	#CRUD - Create, Read, Update and Delete
	serializer_class = TodoSerializer
	queryset = Todo.objects.all()
'''

class MeetupView(viewsets.ModelViewSet):
	serializer_class = MeetupSerializer
	queryset = Meetup.objects.all()

