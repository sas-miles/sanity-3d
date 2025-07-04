# Experience Documentation

## Core Systems

- [Instancing System](core/INSTANCING.md) - Our performant model instancing system
- [Scene Composition](core/SCENE_COMPOSITION.md) - How we organize complex 3D scenes

## Project Structure

```
/experience
  /baseModels          # Core model definitions
  /models              # Model-specific instancing
  /scenes              # Scene compositions
  /animations          # Animation systems
  /utils               # Shared utilities
  /types               # TypeScript definitions
  /docs                # Documentation
```

## Quick Links

- [Sample Instance Implementation](../models/SampleInstances.tsx)
- [Instancing Examples](../examples)
- [Scene Compositions](../scenes/mainScene/compositions)
- [Animation System](../animations)

## GLTF Pipeline

```bash
gltf-pipeline -i raw-exports/models/mountain.gltf -o public/models/mountain.glb
```
