/**
 *
 * Created by kumanan12 on 11/28/14.
 */
var postsData = [ {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
},
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    }, {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    }
];
Template.postsList.helpers({
    posts: postsData
});