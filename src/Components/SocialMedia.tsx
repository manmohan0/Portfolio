import { InstagramLogo, LinkedInLogo, GitHubLogo, XLogo, MailLogo } from "./logos"
import type { SocialMediaProps } from "../types";

export const SocialMedia = ({ logoSize } : SocialMediaProps) => {
    return (
        <div className='flex align-middle items-center space-x-4'>
            <a href="https://www.instagram.com/manmohan_wable_0/">
                <InstagramLogo size={logoSize}/>
            </a>
            <a href="https://www.linkedin.com/in/manmohan-wable0/">
                <LinkedInLogo size={logoSize}/>
            </a>
            <a href="https://github.com/manmohan0">
                <GitHubLogo size={logoSize}/>
            </a>
            <a href="https://x.com/ManmohanWable">
                <XLogo size={logoSize}/>
            </a>
            <a href="mailto:manmohanwable0@gmail.com">
                <MailLogo size={logoSize}/>
            </a>
        </div>
    )
}