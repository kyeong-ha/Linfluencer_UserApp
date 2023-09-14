import { Post } from './post.type';
import { SNS } from './sns.type';

export interface IInfluencer {  
    readonly influencerId: string;
    readonly youtubeId: string;
    
    readonly name: string;
    readonly description: string;
    readonly profileImg: string;
    readonly bannerImg: string;

    readonly posts: Post[];
    readonly snsList: SNS;

    readonly createdAt: string;
    readonly updatedAt: string;

    setInfluencerId(influencerId: string): void;
    setyoutubeId(youtubeId: string): void;
    setName(name: string): void;
    setDescription(description: string): void;
    setProfileImg(profileImg: string): void;
    setBannerImg(bannerImg: string): void;
    setPosts(posts: Post[]): void;
    setSnsList(snsList: SNS): void;
    setCreatedAt(createdAt: string): void;
    setUpdatedAt(updatedAt: string): void;
}

export class Influencer implements IInfluencer{

    influencerId: string;
    youtubeId: string;
    name: string;
    description: string;
    profileImg: string
    bannerImg: string;
    posts: Post[];
    snsList: SNS;
    createdAt: string;
    updatedAt: string;

    constructor(){
        this.influencerId = "";
        this.youtubeId = "";
        this.name = "";
        this.description = "";
        this.profileImg = "";
        this.bannerImg = "";
        this.posts = [];
        this.snsList = new SNS(this.influencerId);
        this.createdAt = "";
        this.updatedAt = "";
    }
    
    public setInfluencerId = (influencerId: string): void => { this.influencerId = influencerId; }
    public setyoutubeId = (youtubeId: string): void => { this.youtubeId = youtubeId; }
    public setName =(name: string): void => { this.name = name; }
    public setDescription = (description: string): void => { this.description = description; }
    public setProfileImg = (profileImg: string): void => { this.profileImg = profileImg; }
    public setBannerImg = (bannerImg: string): void => { this.bannerImg = bannerImg; }
    public setPosts = (posts: Post[]): void => { 
        for(let post of posts)
            this.posts.push(post)
    }
    public setSnsList = (snsList: SNS): void => { this.snsList = snsList; }
    public setCreatedAt = (createdAt: string): void => { this.createdAt = createdAt; }
    public setUpdatedAt = (updatedAt: string): void => { this.updatedAt = updatedAt; }
}