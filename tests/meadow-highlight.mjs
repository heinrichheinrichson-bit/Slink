import assert from 'node:assert/strict';
import * as THREE from 'three';
import {highlightMeadow} from '../src/renderer/meadow-highlight.js';
import {createRouteCue} from '../src/renderer/route-cue.js';
const group=new THREE.Group(),m=new THREE.MeshStandardMaterial({color:'#a6c951'}),mesh=new THREE.Mesh(new THREE.BoxGeometry(),m);group.add(mesh);const before=m.color.clone();highlightMeadow(group,true);assert.notEqual(m.color.getHex(),before.getHex());const lit=m.color.clone();highlightMeadow(group,true);assert(m.color.equals(lit),'No cumulative whitening');highlightMeadow(group,false);assert(m.color.equals(before),'Exact original colour restored');assert.equal(group.children.length,1,'No extra geometry');
const cue=createRouteCue();cue.update({n:4},[0,1,5],'highlight',true,0);assert.equal(cue.group.children.length,0,'No old trail in highlight mode');cue.dispose();mesh.geometry.dispose();m.dispose();console.log('PASS meadow-only highlight, no accumulation, exact restoration, no trail/overlay');
