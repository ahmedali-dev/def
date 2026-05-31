from pydub import AudioSegment
import noisereduce as nr
import scipy.io.wavfile as wavfile
import numpy as np
import os

# 1. Load the AAC file and convert it to WAV format temporarily
print("Loading audio...")
audio = AudioSegment.from_file("output.aac", format="aac")
audio.export("temp.wav", format="wav")

# 2. Read the WAV file
rate, data = wavfile.read("temp.wav")

# 3. Perform Noise Reduction
print("Cleaning background noise...")
# Reshape data if it's stereo
if len(data.shape) == 2:
    data = data.T

# Reduce noise (prop_decrease controls how much noise to remove, 0.8 is usually safe without distorting the voice)
reduced_noise = nr.reduce_noise(y=data, sr=rate, stationary=True, prop_decrease=0.8)

if len(data.shape) == 2:
    reduced_noise = reduced_noise.T

# 4. Save the noise-reduced audio
wavfile.write("cleaned_temp.wav", rate, reduced_noise)

# 5. Enhance and normalize the volume (make the voice louder and clearer)
print("Enhancing audio...")
cleaned_audio = AudioSegment.from_file("cleaned_temp.wav", format="wav")
normalized_audio = cleaned_audio.normalize()

# 6. Export back to AAC format
normalized_audio.export("enhanced_output.aac", format="adts")
print("Done! Saved as enhanced_output.aac")

# Clean up temporary files
os.remove("temp.wav")
os.remove("cleaned_temp.wav")
