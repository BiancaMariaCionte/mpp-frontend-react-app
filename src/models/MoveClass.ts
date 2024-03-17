export class MoveClass{
    [x: string]: any;
    private id: number;
    private instructorName: string;
    private type: string; //danceClass or fitnessClass
    private youtubeUrl: string;
    private dificulty: string;

    public constructor(id: number, instructorName: string, type: string, youtubeUrl: string, dificulty: string )
    {
        this.id = id;
        this.instructorName=instructorName;
        this.type = type;
        this.youtubeUrl=youtubeUrl;
        this.dificulty=dificulty;
    }

    public getId(): number{
        return this.id;
    }

    public getInstructorName(): string{
        return this.instructorName;
    }

    public getType(): string{
        return this.type;
    }

    public getYoutubeUrl(): string{
        return this.youtubeUrl;
    }

    public getDificulty(): string{
        return this.dificulty;
    }

    public setId(newId: number){
        this.id=newId;
    }

    public setInstructorName(newInstructorName: string){
        this.instructorName=newInstructorName;
    }

    public setType(newType: string){
        this.type=newType;
    }

    public setYoutubeUrl(newYoutubeUrl: string){
        this.youtubeUrl=newYoutubeUrl;
    }

    public setDificulty(newDificulty: string){
        this.dificulty=newDificulty;
    }
}