import {GardenSounds} from './garden-sounds.js';
export const BLOOM_SAMPLES={wink:'./audio/wink-dink.mp3',harp:'./audio/harp-glissando.wav'};
export class BloomSounds extends GardenSounds{
 constructor(){super();this.choice='wink';this.volume=.45;this.buffers=new Map();this.loading=new Map()}
 async unlock(){await super.unlock();const name=this.choice;if(!this.buffers.has(name)){if(!this.loading.has(name))this.loading.set(name,fetch(new URL(BLOOM_SAMPLES[name],import.meta.url)).then(r=>{if(!r.ok)throw Error('Blütenklang konnte nicht geladen werden.');return r.arrayBuffer()}).then(b=>this.context.decodeAudioData(b)).then(b=>this.buffers.set(name,b)).catch(e=>{this.loading.delete(name);throw e}));await this.loading.get(name)}}
 play(){if(this.context?.state!=='running'||!this.buffers.has(this.choice))return false;this.stop();const c=this.context,s=c.createBufferSource(),g=c.createGain(),t=c.currentTime,b=this.buffers.get(this.choice);this.output.gain.setTargetAtTime(this.volume,t,.01);s.buffer=b;g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(1,t+.005);g.gain.setValueAtTime(1,t+Math.max(.005,b.duration-.02));g.gain.linearRampToValueAtTime(.0001,t+b.duration);s.connect(g);g.connect(this.output);this.voices.add(s);s.onended=()=>{this.voices.delete(s);s.disconnect();g.disconnect()};s.start(t);s.stop(t+b.duration+.01);return true}
}
