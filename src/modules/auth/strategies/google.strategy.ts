import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback, Profile } from 'passport-google-oauth20';




@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: process.env.CLIENT_ID || '',
      clientSecret: process.env.CLIENT_SECRET || '',
      callbackURL: process.env.CALLBACK_URL ,
      scope: ['email', 'profile'],
    });


  }
 
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ) : Promise<any> {
    const { name, emails, photos } = profile;
    
    const user = { 
      email: emails ? emails[0].value : '',
      name: name ? `${name.givenName} ${name.familyName}` : '',
      photo: photos && photos.length > 0 ? photos[0].value : '',
      accessToken,
      refreshToken
    };

    done(null, user);
  }
}
