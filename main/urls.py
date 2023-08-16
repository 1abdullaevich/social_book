from django.urls import path
from .views import (HomeView, AboutUsView, AboutResultsView, CompetitionView, CompetitionDetailView, ContactView,
                    CompetitionFormView, LoginView, ResultView, ProfileView, RegistrationView, RulesView, GalleryView)

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('about-us/', AboutUsView.as_view(), name='about-us'),
    path('about-results/', AboutResultsView.as_view(), name='about-results'),
    path('competition/', CompetitionView.as_view(), name='competition'),
    path('competition/detail/', CompetitionDetailView.as_view(), name='competition-detail'),
    path('contact/', ContactView.as_view(), name='contact'),
    path('competition-form/', CompetitionFormView.as_view(), name='competition-form'),
    path('login/', LoginView.as_view(), name='login'),
    path('result/', ResultView.as_view(), name='result'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('registration/', RegistrationView.as_view(), name='registration'),
    path('rules/', RulesView.as_view(), name='rules'),
    path('gallery/', GalleryView.as_view(), name='gallery')
]
