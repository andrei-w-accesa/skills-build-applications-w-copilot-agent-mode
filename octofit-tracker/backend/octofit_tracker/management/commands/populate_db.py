from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from djongo import models

# Sample models for demonstration (replace with actual models if defined)
class Team(models.Model):
    name = models.CharField(max_length=100, unique=True)
    class Meta:
        app_label = 'octofit_tracker'

class Activity(models.Model):
    user = models.CharField(max_length=100)
    team = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    duration = models.IntegerField()
    class Meta:
        app_label = 'octofit_tracker'

class Leaderboard(models.Model):
    team = models.CharField(max_length=100)
    points = models.IntegerField()
    class Meta:
        app_label = 'octofit_tracker'

class Workout(models.Model):
    name = models.CharField(max_length=100)
    difficulty = models.CharField(max_length=50)
    class Meta:
        app_label = 'octofit_tracker'

User = get_user_model()

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Clear collections
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()
        User.objects.all().delete()

        # Teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Users
        users = [
            User.objects.create_user(username='superman', email='superman@dc.com', password='pass', first_name='Clark', last_name='Kent'),
            User.objects.create_user(username='batman', email='batman@dc.com', password='pass', first_name='Bruce', last_name='Wayne'),
            User.objects.create_user(username='ironman', email='ironman@marvel.com', password='pass', first_name='Tony', last_name='Stark'),
            User.objects.create_user(username='spiderman', email='spiderman@marvel.com', password='pass', first_name='Peter', last_name='Parker'),
        ]

        # Activities
        Activity.objects.create(user='superman', team='DC', type='Flight', duration=60)
        Activity.objects.create(user='batman', team='DC', type='Martial Arts', duration=45)
        Activity.objects.create(user='ironman', team='Marvel', type='Tech Suit', duration=50)
        Activity.objects.create(user='spiderman', team='Marvel', type='Web Swing', duration=40)

        # Leaderboard
        Leaderboard.objects.create(team='Marvel', points=90)
        Leaderboard.objects.create(team='DC', points=80)

        # Workouts
        Workout.objects.create(name='Super Strength', difficulty='Hard')
        Workout.objects.create(name='Stealth', difficulty='Medium')
        Workout.objects.create(name='Web Training', difficulty='Easy')

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
