package BlogApp.blog_app.Service;

import BlogApp.blog_app.Entity.BlogPost;
import BlogApp.blog_app.Repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class BlogPostService {

    @Autowired
    private BlogPostRepository blogPostRepository;

    public BlogPost createBlogPost(BlogPost blogPost){
       return  blogPostRepository.save(blogPost);
    }

    public List<BlogPost> getAllBlogPosts(){
        return  blogPostRepository.findAll();
    }

    public BlogPost getBlogById(Long _id) {
        return blogPostRepository.findById(_id).orElse(null);
    }
}
