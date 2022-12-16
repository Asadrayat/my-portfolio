import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const Projects = () => {
    const { data: projectDatas } = useQuery({
        queryKey: ['projectdatas'],
        queryFn: async () => {
            const res = await fetch('https://my-portfolio-server-nine-lilac.vercel.app')
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="my-10">
            <div className="grid text-5xl text-slate-600 font-bold rounded-box place-items-center">Projects</div>
            <div className="divider "></div>
            <div className="flex flex-col lg:flex-row gap-10" >
                {
                    projectDatas?.map(
                        project =>
                            <div className="card h-72 lg:w-full glass">

                                <figure><img src={project.picture} alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{project.title}</h2>
                                    <div className="card-actions justify-start">
                                        {/* The button to open modal */}
                                        <Link to={`/projects/${project._id}`}><label htmlFor="my-modal-3" className="btn  bg-gradient-to-r from-info to-accent text-white">Details</label></Link>

                                        {/* Put this part before </body> tag */}
                                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box relative">
                                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )
                }

            </div>
        </div>

    );
};

export default Projects;