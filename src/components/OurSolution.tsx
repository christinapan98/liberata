import {useState} from "react";
import "./OurSolution.css"

type OpenCloseItemProps = {id:string; 
                        title: string; 
                        children:JSX.Element|string; 
                        activeId:string|null; 
                        onToggle:(id:string)=> void;}

function OpenCloseItem({id, title, children, activeId, onToggle}:OpenCloseItemProps){
    const isOpen = (id ===activeId);

    return(
        <div className="open-close-wrapper" id={id}>
            <a  href={`#${id}`}
                className="open-close-header" 
                onClick={(e)=>{
                    e.preventDefault();
                    onToggle(id);
                    setTimeout(() => {
                        document.getElementById(id)?.scrollIntoView({ 
                            behavior: "smooth", 
                            block: "start",
                        });
                    },0);
                }}
            >
                <span className="open-close-title">{title}</span>
                <span className={`open-close-icon ${isOpen ? "minus" : "plus"}`}>{isOpen ? "-" : "+"}</span>
            </a>
            {isOpen && <div className="open-close-content">{children}</div>}
        </div>
    );
}

type OpenCloseChildrenProps ={description: string;
                            oldSystemContent: string;
                            liberataContent: string;
                            }
function OpenCloseChildren({description, oldSystemContent, liberataContent}:OpenCloseChildrenProps){
    return(
        <>
            <p className="open-close-description">{description}</p>
            <div className="cards-layout">
                <div className="card old-system-card">
                    <p className="card-title">Old System</p>
                    <p className="card-content" style={{ whiteSpace: "pre-line" }}>{oldSystemContent}</p>
                </div>
                <div className="card liberata-card">
                    <p className="card-title">Liberata</p>
                    <p className="card-content">{liberataContent}</p>
                </div>
            </div>
        </>

    );
}

function OurSolution(){
    const [activeSection, setActiveSection] = useState<string|null>(null)
    const toggleSolution = (id:string) => {
        setActiveSection(activeSection === id ? null : id);
    }

    return(
        <>
            <OpenCloseItem
                id="merit-problem"
                title="1  The Merit Problem"
                activeId={activeSection}
                onToggle={toggleSolution}
            >
                <OpenCloseChildren
                    description="Ending politics of maneuvering for authorship roles."
                    oldSystemContent= {`The merit problem concerns how scientific contributions are recognized within academia. \n
                        In the current system, an author’s position on a paper is imprecisely correlated to their contributions on that paper. For example, the first author position is typically considered disproportionally more prestigious than other positions regardless of other authors’ contributions. This system is prone to political maneuvering within labs and institutions as researchers compete for authorship positions. Additionally, there is no recognizable form of credit given to other key roles within the scientific process, like peer reviewers and study replicators.`}
                    liberataContent="Liberata seeks to address these issues by introducing a shareholder model within its platform where credit is distributed as quantifiable shares of a whole. In contrast to the traditional authorship model, where contributions are hard to determine and subject to politics, Liberata’s shareholder model ensures that contributions of every author are fairly recognized."
                />
            </OpenCloseItem>

            
            <OpenCloseItem
                id="economic-problem"
                title="2  The Economic Problem"
                activeId={activeSection}
                onToggle={toggleSolution}
            >
                <OpenCloseChildren
                    description="Eliminating reward mismatch among the academic publishing community."
                    oldSystemContent={`The economic problem concerns how the proceeds from a work of research are split up among the involved parties. After funding is secured, typically via government grants, a key mismatch arises: while researchers do most of the work, private publishing companies collect most of the revenue from publications through subscription and publishing fees.\n
                        Though publishers’ fees are justified by their content curation, this service is still done by a volunteer-based peer review effort from academics. This system could be made more effective if fees were removed while preserving quality. Current open-source publishing platforms have removed fees but haven't developed strong quality control mechanisms yet.`}
                    liberataContent="Liberata seeks to address these issues with an open-source publishing platform that eliminates fees while also providing 
                        quality control by incentivizing academics to review papers within the platform. This incentive comes within the form of shares given 
                        out for peer reviews, ensuring that reviewers of a work of research are recognized in addition to its authors."
                />
            </OpenCloseItem>


            <OpenCloseItem
                id="trust-problem"
                title="3  The Trust Problem"
                activeId={activeSection}
                onToggle={toggleSolution}
            >
                <OpenCloseChildren
                    description="Paving the way for more reliable research by incentivizing the replication of scientific studies."
                    oldSystemContent={`This section concerns how the body of scientific literature can be made more reliable. \n
                        Currently, most scientific findings are supported by only one study, due to a lack of incentive for researchers to replicate them. Because of this, it can be difficult for later works to detect errors in preceding works. This can lead to serious issues where latent errors negatively affect public policy, healthcare, and infrastructure decisions until the error is spotted and the publication corrected or retracted. The ever increasing scale of academic research only exacerbates this issue and has noticeably affected public trust in science. \n
                        Solving this problem entails having a mechanism for incentivizing replication studies that is robust to collusion.`}
                    liberataContent="Liberata solves these problems by allotting shares to replicators of a study as well as to its authors and reviewers. 
                        This way, academics can also gain credit by duplicating an existing study, rather than only through the publication of a new one."
                />
            </OpenCloseItem>
        </>
    );
}

export default OurSolution;