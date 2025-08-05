# forms.py
from django import forms
from .models import Hotel, Dish
from django.forms import inlineformset_factory

class HotelForm(forms.ModelForm):
    class Meta:
        model = Hotel
        fields = '__all__'

DishFormSet = inlineformset_factory(
    Hotel, Dish,
    fields=('name', 'price'),
    extra=2,
    can_delete=True,
    min_num=1,
    validate_min=True,
    validate_max=True
)