from djongo import models

class List(models.Model):
  title = models.CharField(max_length=100)
  movie_id = models.IntegerField()
  backdrop_path = models.CharField(max_length=200)

  def __str__(self):
    return self.title