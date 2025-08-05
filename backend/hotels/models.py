from django.db import models

# Create your models here.
from django.db import models

class Hotel(models.Model):
    name = models.CharField(max_length=100)
    contact_number = models.CharField(max_length=15)
    email = models.EmailField()
    address = models.TextField()
    reason_to_join = models.TextField()
    total_seats = models.PositiveIntegerField()
    seats_to_register = models.PositiveIntegerField()
    avg_customer_time = models.CharField(max_length=50)
    most_famous = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Dish(models.Model):
    hotel = models.ForeignKey(Hotel, related_name='dishes', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    price = models.FloatField()

    def __str__(self):
        return f"{self.name} - ₹{self.price}"