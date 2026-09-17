import { Alert } from "../../ui/alert";
import { Popcorn } from "lucide-react";

const AlertTemplate = () => {

    return (
        <div className="grid gap-4 p-6">
            <Alert
                variant="default"
                type="text"
                text="This is a simple text alert."
            />
            <Alert
                variant="default"
                type="text-icon"
                text="This is a simple text alert."
            />
            <Alert
                variant="default"
                type="title-text"
                title="Payment Failed"
                text="This is a simple text alert."
            />
            <Alert
                variant="default"
                type="title-text-icon"
                 icon={<Popcorn />}
                title="Payment Failed"
                text="This is a simple text alert."
            />

            <Alert
                variant="success"
                type="text-icon"
                text="Your changes have been saved successfully."
            />

            <Alert
                variant="danger"
                type="title-text"
                title="Payment Failed"
                text="Please check your card details."
            />

            <Alert
                variant="warning"
                type="title-text-icon"
                title="Warning!"
                text="You are approaching your usage limit."
                icon={<Popcorn />}
            />

            <Alert
                variant="inverted"
                type="title-text-icon"
                title="Heads Up!"
                text="This is an inverted style alert."
            />
        </div>
    )
}

export default AlertTemplate;