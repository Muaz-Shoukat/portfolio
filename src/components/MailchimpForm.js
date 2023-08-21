import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const postUrl =
    "https://hotmail.us21.list-manage.com/subscribe/post?u=3aa8d8ef7aee71196ea7da6ed&amp;id=1064cc75dc&amp;f_id=00c3cde1f0";

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};
