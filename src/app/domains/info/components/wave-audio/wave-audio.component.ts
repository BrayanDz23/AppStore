
import { AfterContentInit, Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import WaveSurfer from 'wavesurfer.js'


@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent{

  @Input({required:true}) audioUrl!:string;

  @ViewChild('wave') contenedor!: ElementRef;

  private ws!: WaveSurfer;
  isPlaying = signal(false);

    ngAfterViewInit(){
    this.ws = WaveSurfer.create({
      container:this.contenedor.nativeElement,
      url: this.audioUrl,
      waveColor: 'rgb(200, 0, 200)',
      progressColor: 'rgb(100, 0, 100)',
    })

    this.ws.on('play', () => this.isPlaying.set(true));
    this.ws.on('pause', () => this.isPlaying.set(false));

    
  }

  playPause(){
    this.ws.playPause();
  }

}
