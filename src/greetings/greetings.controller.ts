import { Controller,Post,Body } from '@nestjs/common';

@Controller('greetings')
export class GreetingsController {
@Post('personalized')
personalizedGreeting(@Body('name') name:string,@Body('favcolor' )favcolor: string){
    if(!name || !favcolor){
return {message:"Please enter your name and favorit color to get customized grreting"}
    }
    const greeting ='hello,${name} nice to meet someone who loves the color${favcolor}.';
    return {message:greeting};
}


}
