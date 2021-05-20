import { generateStories } from '@mantine/docs';
import * as demos from './src/demos';

Object.keys(demos).forEach((demo) => {
  generateStories(demos[demo]);
});
