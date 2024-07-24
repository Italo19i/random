import pygame

# Inicializar o mixer do pygame
pygame.mixer.init()

# Carregar e tocar a música
pygame.mixer.music.load("musica.mp3")  # Substitua "musica.mp3" pelo nome do seu arquivo MP3
pygame.mixer.music.play()

# Esperar até que a música termine
while pygame.mixer.music.get_busy():
    continue

# Parar a música ao finalizar
pygame.mixer.music.stop()
