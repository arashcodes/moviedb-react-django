from rest_framework import serializers 
from . models import *
  
class ReactSerializer(serializers.ModelSerializer): 
  class Meta: 
    model = List 
    fields = ['title', 'movie_id', 'img_url']