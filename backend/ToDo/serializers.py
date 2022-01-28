from rest_framework import serializers
from .models import Meetup

''''class TodoSerializer(serializers.ModelSerializer):
	#specify the model to work with and the fields to be converted to JSON
	class Meta:
		model = Todo
		fields = ('id', 'title', 'description', 'completed')
'''

class MeetupSerializer(serializers.ModelSerializer):
	class Meta:
		model = Meetup
		fields = ('id', 'title', 'address', 'description', 'image')

