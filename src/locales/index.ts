import en from './en.json';
import ru from './ru.json';
import utils from './utils';
import uz from './uz.json';

export interface LanguageSchema {
  hello: string;
}

export type Languages = 'en' | 'ru' | 'uz' | 'fr';


const messages:Record<Languages, LanguageSchema> =  {
  en,
  ru, uz,
  fr: {
    hello: 'Bonjour'
  }
}



export default messages;
