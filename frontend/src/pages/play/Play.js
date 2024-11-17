import React from 'react';
import '../../styles/styles.css';

function Play() {
    return (
        <>
        <h1 id="play-page-header">Your Books</h1>
        <div class="user-book-filters">
            <form action="/play/search/song-progress/<%= userId %>" method="get" class="user-book-filter-button" id="left-filter" >
                <span class="button-edge" id="button-edge-left"></span>
                <input type="submit" value="Not Started" name="user-book-filter" class="inner-button" id="inner-button-left"/>
            </form>
            <form action="/play/search/song-progress/<%= userId %>" method="get" class="user-book-filter-button" id="center-filter">
                <span class="button-edge" id="button-edge-center"></span>
                <input type="submit" value="In Progress" name="user-book-filter" class="inner-button" id="inner-button-center"/>
            </form>
            <form action="/play/search/song-progress/<%= userId %>" method="get" class="user-book-filter-button" id="right-filter"> 
                <span class="button-edge" id="button-edge-right"></span>
                <input type="submit" value="Completed" name="user-book-filter" class="inner-button" id="inner-button-right"/>
            </form>
        </div>
        <form class="play-page-search">
            <input type="search" placeholder="search your books..."/>
            <select id="play-search-type" action="/play" method="get">
                <option value="book">Book</option>
                <option value="song">Song</option>
            </select>
        </form>
        {/* <% if (userBooks.length > 0) { %>
        <div id="play-grid">
            <% for (let book of userBooks) { %>
                <div class="user-book-listing">
                    <img src="/images/purchase/<%= book.image_link %>" width="220" height="340" class="user-book-img" 	id="book-id-<%= book.Book_ID %>">
                    <h4><%= book.Book_Name %></h4>
                    <div class="user-book-info">
                        <h5>Songs Completed: <%= songsCompleted[book.Book_ID] %></h5>
                        <h5>Difficulty: <%= book.Difficulty %></h5>
                    </div>
                    <h5 class="in-progress-count">Songs in progress: <%= songsInProgress[book.Book_ID] %></h5>
                </div>
            <% } %>
        </div>
        <% } else { %>
            <div class="no-books">
                <h3 >You don't have any books yet</h3>
                <form action="/buy" method="get">
                    <input type="submit" value="Purchase Books" />
                </form>
            </div>
        <% } %>
        <% for (let book in bookSongs) { %>
            <% if (bookToOpen && book === bookToOpen) { %>
                <div class="book-songs-window-visible" id="book-window-id-<%= bookSongs[book][0].Book_ID %>">
            <% } else { %>
                <div class="book-songs-window" id="book-window-id-<%= bookSongs[book][0].Book_ID %>">
            <% } %>
                <div>
                <% for (let song of bookSongs[book]) { %>
                    <% if (songToOpen && song.Song_ID === parseInt(songToOpen)) { %>
                    <div class="song-pages-visible" id="song-pages-<%= song.Song_ID %>">
                    <% } else { %>
                    <div class="song-pages" id="song-pages-<%= song.Song_ID %>">
                    <% } %>
                        <button class="close-full-screen-button">Exit Full Screen</buton>
                        <button class="full-screen-button">Full Screen</button>
                        <% for (let i=1; i <= song.pages; i++) { %>
                            <img src="/images/songs/<%= song.Image_Link %>/page<%= i %>.jpg" class="book-song">
                        <% } %>
                    </div>
                <% } %>
                </div>
            <div class="songs-list">
                <div class="close-book-button"><h6>Close book</h6></div>
                <h2 class="book-title"><%= bookSongs[book][0].Book_Name %></h2>
                <% for (let song of bookSongs[book]) { %>
                    <div class="song" id="song-id-<%= song.Song_ID %>">
                        <h3 class="song-name"><%= song.Song_Name %></h3>
                        <div class="user-song-info">
                            <h4 class="song-difficulty"><%= song.Difficulty %></h4>
                            <div class="song-progress">
                                <h4><%= song.progress %></h4>
                                <p class="arrow-parent"><i class="song-progress-arrow"></i></p>
                                <form action="/play" method="post">
                                <fieldset class="song-progress-dropdown hidden">
                                    <div class="song-progress-dropdown-item">
                                        <input type="radio" id="not-started-<%= song.Book_ID %>-<%= song.Song_ID %>-<%= song.User_ID %>" name="song-progress" value="Not Started"/>
                                        <label for="not-started-<%= song.Book_ID %>-<%= song.Song_ID %>-<%= song.User_ID %>">Not Started</label>
                                    </div>
                                    <div class="song-progress-dropdown-item">
                                        <input type="radio" id="in-progress-<%= song.Book_ID %>-<%= song.Song_ID %>-<%= song.User_ID %>" name="song-progress" value="In Progress" />
                                        <label for="in-progress-<%= song.Book_ID %>-<%= song.Song_ID %>-<%= song.User_ID %>">In Progress</label>
                                    </div>
                                    <div class="song-progress-dropdown-item">
                                        <input type="radio" id="completed-<%= song.Book_ID %>-<%= song.Song_ID %>-<%= song.User_ID %>" name="song-progress" value="Completed" />
                                        <label for="completed-<%= song.Book_ID %>-<%= song.Song_ID %>-<%= song.User_ID %>">Completed</label>
                                    </div>
                                    <input type="hidden" name="song-progress-id" value="song-progress~<%= song.Book_ID %>~<%= song.Song_ID %>~<%= song.User_ID %>" />
                                    <input type="submit" value="submit" />
                                </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                <% } %>
            </div> */}
		{/* </div> */}
		{/* </div> */}
	    {/* // <% } %></div> */}
        </>
    );
}

export default Play;