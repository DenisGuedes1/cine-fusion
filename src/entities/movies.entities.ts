import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({"unique":true})
    imdb_id: string;
  
    @Column()
    adult: boolean;
  
    @Column()
    backdrop_path: string;
  
    @Column('simple-array')
    genre_ids: number[];
  
    @Column()
    media_type: string;
  
    @Column()
    original_language: string;
  
    @Column()
    original_title: string;
  
    @Column()
    overview: string;
  
    @Column({ type: 'decimal', precision: 10, scale: 4 })
    popularity: number;
  
    @Column()
    poster_path: string;
  
    @Column()
    release_date: string;
  
    @Column()
    title: string;
  
    @Column()
    video: boolean;
  
    @Column({ type: 'decimal', precision: 10, scale: 4 })
    vote_average: number;
  
    @Column()
    vote_count: number;
  }