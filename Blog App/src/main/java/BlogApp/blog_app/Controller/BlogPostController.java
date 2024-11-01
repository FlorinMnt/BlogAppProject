package BlogApp.blog_app.Controller;

import BlogApp.blog_app.Entity.BlogPost;
import BlogApp.blog_app.Service.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/blogpost")
@CrossOrigin
public class BlogPostController {
    @Autowired
    private BlogPostService blogPostService;

    @PostMapping("/save")
    public BlogPost createBlogPost(@RequestBody BlogPost blogPost){
        return blogPostService.createBlogPost(blogPost);
    }

    @GetMapping("/getAll")
    public List<BlogPost> getAllBlogPosts(){
        return blogPostService.getAllBlogPosts();
    }

    @GetMapping("/getBlogById/{_id}")
    public BlogPost getBlogById(@PathVariable Long _id){
        return blogPostService.getBlogById(_id);
    }

    @PostMapping("/saveWithImage")
    public BlogPost createBlogPostWithImage(
            @RequestParam("title") String title,
            @RequestParam("text") String text,
            @RequestParam("image") MultipartFile image) throws IOException {

        BlogPost blogPost = new BlogPost();
        blogPost.setTitle(title);
        blogPost.setText(text);
        blogPost.setImage(image.getBytes()); // transformăm fișierul într-un array de bytes

        return blogPostService.createBlogPost(blogPost);
    }
    @GetMapping("/image/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable Long id) {
        BlogPost blogPost = blogPostService.getBlogById(id);
        if (blogPost != null && blogPost.getImage() != null) {
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(blogPost.getImage());
        }
        return ResponseEntity.notFound().build();
    }
//    String contentType = determineContentType(blogPost.getImage());
//        return ResponseEntity.ok()
//            .contentType(MediaType.parseMediaType(contentType))
//            .body(blogPost.getImage());
}
