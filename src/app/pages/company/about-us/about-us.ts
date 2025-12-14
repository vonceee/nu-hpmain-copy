import { Component, signal } from '@angular/core';
import { MainHeader } from "src/app/components/main-header/main-header";
import { MainFooter } from "src/app/components/main-footer/main-footer";
import { CommonModule } from '@angular/common';

/* -- Programs Section Outreach Gallery -- */
interface GalleryItem {
  src: string;
  caption: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

@Component({
  selector: 'about-us',
  imports: [MainHeader, MainFooter, CommonModule],
  templateUrl: './about-us.html',
  styleUrls: ['./about-us.scss', './programs-section.scss'],
})
export class aboutUs {
  tab = signal<number>(0)

  currentGalleryIndex = signal<number>(0);

  galleryItems: GalleryItem[] = [
    {
      src: '/assets/images/aboutus/programs/07e4af2a12cc40d65d4ffdce1070383cda9a6972.png',
      caption: 'Ms. Mhae explains to the SPED children the applications of Fischer Tips during the art excercises for special children.'
    },
    {
      src: '/assets/images/aboutus/programs/3d9f73857a51bed7a299433a5fbc93fd00d8bb88.png',
      caption: 'Fischer Tips Contests as one of the features of “Simpleng Pasko Para Sa Pamilyang Pilipino” Projects.'
    },
    {
      src: '/assets/images/aboutus/programs/700eba0728af555a5ed2b7db7d3b7faf0fc74e89.png',
      caption: 'NAO “The Humanoid Robot” entertained the special children with his talent performances.'
    },
    {
      src: '/assets/images/aboutus/programs/d930b7a59c5e8bccd902106856c6a5e9042ab23f.png',
      caption: 'HPI Robot Show for underprivileged children in Malolos, Bulacan.'
    },
    {
      src: '/assets/images/aboutus/programs/fd8eb0a7fc53e1829f328e13286a6420520add75.png',
      caption: 'Winners from Fischer Tips Contest received their awards from Ms. Che and the officials of the Rotary Club.'
    },
    {
      src: '/assets/images/aboutus/programs/2e63f8a821bb2af90bc20a9538e89edde601e30e.png',
      caption: 'Special Education Department of the Commonwealth Elementary School was granted the 48 inches LCD Television during their Christmas Party organized by ABS-CBN, the teacher shown receiving the TV-Set is also a handicapped person.'
    }
  ];

  /* -- Programs Section Outreach Gallery -- */
  setGalleryIndex(index: number) {
    this.currentGalleryIndex.set(index);
  }

  events: TimelineEvent[] = [
    {
      year: '1994',
      title: 'The Beginning',
      description: 'Hytec Power Inc. was founded to empower technical education across the Philippines.',
      position: 'left'
    },
    {
      year: '2000',
      title: 'Expansion Era',
      description: 'Partnered with leading global brands like Fischertechnik, De Lorenzo, and PHYWE to bring world-class educational solutions.',
      position: 'right'
    },
    {
      year: '2010',
      title: 'Innovation Phase',
      description: 'Introduced robotics and automation solutions including VEX Robotics, Armatrol, and advanced manufacturing systems.',
      position: 'left'
    },
    {
      year: '2020',
      title: 'Industry 4.0',
      description: 'Leading the transition to smart manufacturing and digital education with AI, IoT, and advanced automation.',
      position: 'right'
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Continuing to shape the future of technical education with cutting-edge technology and strategic partnerships.',
      position: 'left'
    }
  ];
}