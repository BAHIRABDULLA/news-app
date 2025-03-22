import Image from 'next/image';

type ArticleProps = {
  publishedAt: Date;
  id: string;
  urlToImage:string ;
  title : string ;
  description : string ; 
  url:string
};
interface NewsCardProps {
  article: ArticleProps;
  viewMode: string;  // Or use a union type for specific values, like 'grid' | 'list'
}

const NewsCard = ({ article ,viewMode}: NewsCardProps) => {
    // Format the date as needed (example: MM/DD/YYYY)
  
        const formattedDate = new Date(article.publishedAt).toLocaleDateString();
        
        const handleRemove = () => {
          console.log('Remove article with ID:', article.id);
          // Implement actual removal logic here
        };
      
        // Card view (default)
        if (viewMode === 'card') {
          return (
            <div className="bg-white p-4 rounded-lg shadow-lg">
              {/* Image section */}
              <div className="w-full h-48 mb-4">
                <Image
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              
              {/* Content section */}
              <div>
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{article.description}</p>
                <p className="text-xs text-gray-400 mt-2">{formattedDate}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-2 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>
          );
        }
        
        // List view
        return (
          <div className="bg-white p-4 mt-3  rounded-lg shadow-lg flex items-center">
            {/* Image section - circular image on the left */}
            <div className="flex-shrink-0">
              <Image
                src={article.urlToImage}
                alt={article.title}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            
            {/* Content section - in the middle */}
            <div className="flex-1 mx-4">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.description}</p>
              <div className="flex items-center mt-1">
                <p className="text-xs text-gray-400">{formattedDate}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-xs ml-4"
                >
                  Read more
                </a>
              </div>
            </div>
            
            {/* Close button - on the right */}
            <button 
              className="flex-shrink-0 ml-2 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
              onClick={handleRemove}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        );
      };
      
      export default NewsCard;