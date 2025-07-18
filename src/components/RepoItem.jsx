import { format } from "date-fns";
import { Eye, GitFork, Link2, Star } from "lucide-react";
import millify from "millify";

export default function RepoItem({ data }) {
    return (
        <div className='py-4 space-y-4'>
            <div className='w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
                <h3 className='font-bold text-lg sm:text-xl text-gray-800'>
                    {data.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                    {
                        data.homepage && (
                            <a href={data.homepage} target="_blank" className="flex items-center gap-2 text-xs sm:text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md">
                                <Link2 size={16} />
                                <span>Website</span>
                            </a>
                        )
                    }
                    {
                        data.html_url && (
                            <a href={data.html_url} target="_blank" className="flex items-center gap-2 text-xs sm:text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md">
                                <Link2 size={16} />
                                <span>Code</span>
                            </a>
                        )
                    }
                </div>
            </div>

            {data.description && (
                <p className="text-sm text-gray-600">
                    {data.description}
                </p>
            )}

            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                    <Star size={16} />
                    <p>{millify(data.stargazers_count)}</p>
                </span>

                <span className="flex items-center gap-2">
                    <GitFork size={16} />
                    <p>{millify(data.forks_count)}</p>
                </span>

                <span className="flex items-center gap-2">
                    <Eye size={16} />
                    <p>{millify(data.watchers)}</p>
                </span>
            </div>

            <p className="text-xs text-gray-400">
                Updated on {' '}
                {format(new Date(data.updated_at), 'dd MMM yyyy')}
            </p>

            <div className="flex items-center gap-3">
                <img
                    src={data.owner.avatar_url}
                    alt={data.owner.login}
                    className="w-9 h-9 rounded-full border border-gray-300"
                />
                <div>
                    <h5 className="text-sm font-semibold text-gray-700">{data.name}</h5>
                    <p className="text-xs text-gray-500">by {data.owner.login}</p>
                </div>
            </div>
        </div>
    );
}
