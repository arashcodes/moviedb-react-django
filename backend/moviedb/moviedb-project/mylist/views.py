from django.shortcuts import render 
from rest_framework.views import APIView 
from . models import *
from rest_framework.response import Response 
from . serializer import *
  
class ReactView(APIView): 
  serializer_class = ReactSerializer 

  def get(self, request): 
    detail = [ {"title": detail.title, "movie_id": detail.movie_id, "backdrop_path": detail.backdrop_path}  
    for detail in List.objects.all()] 
    return Response(detail) 

  def post(self, request): 
    serializer = ReactSerializer(data=request.data) 
    if serializer.is_valid(raise_exception=True): 
      serializer.save() 
      return  Response(serializer.data)