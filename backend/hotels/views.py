from django.shortcuts import render, redirect
from .forms import HotelForm, DishFormSet
from .models import Hotel

def features_view(request):
    return render(request, 'hotels/features.html')

def faqs_view(request):
    return render(request, 'hotels/faqs.html')

def feedback_view(request):
    return render(request, 'hotels/feedback.html')

def hotels_register_success(request):
    return render(request, 'hotels/success.html')

def hotels_register_submitted(request)  :
    return render(request, 'hotels/submitted.html')

def hotels_register(request):
    if request.method == 'POST':
        hotel_form = HotelForm(request.POST)
        formset = DishFormSet(request.POST)
        if hotel_form.is_valid() and formset.is_valid():
            hotel = hotel_form.save()
            dishes = formset.save(commit=False)
            for dish in dishes:
                if not dish.name or dish.price is None:
                    formset.add_error(None, "All dishes must have name and price")
                    return render(request, 'hotels/register.html', {
                        'hotel_form': hotel_form,
                        'formset': formset
                    })
                dish.hotel = hotel
                dish.save()
            return redirect('hotels:success')  # Use namespace
    else:
        hotel_form = HotelForm()
        formset = DishFormSet()

    return render(request, 'hotels/register.html', {
        'hotel_form': hotel_form,
        'formset': formset
    })